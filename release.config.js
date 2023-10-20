module.exports = {
branches: "main",
repositoryUrl: "https://github.com/KingSolomonworld/ec2-02.git",
plugins: [
'@semantic-release/commit-analyzer',
'@semantic-release/release-notes-generator',
'@semantic-release/git',
'@semantic-release/github']
}