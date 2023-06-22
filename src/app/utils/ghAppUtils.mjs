import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});


const getResponse  = async () => {
    const res = await octokit.request('GET /users/{OWNER}/events',
    {       OWNER: 'faqbb',
            headers: {
            'X-GitHub-Api-Version': '2022-11-28'
            }
    })
    return res
}


export default async function getLatestCommits (setProp) {
    const response = await getResponse()
    const dateResponse = (i) => new Date(response.data[i].created_at)
        const commits = []
        for (let i = 0; i <= 4; i++) {
            if(response.data[i].type == 'PushEvent') {
                let commitData = {
                    id: response.data[i].id,
                    repo: response.data[i].repo.name.replace('faqbb/', ''),
                    message: response.data[i].payload.commits[0].message,
                    date: dateResponse(i).toUTCString()
                }
                commits.push(commitData)
            }
        }
        setProp(commits)
    }
