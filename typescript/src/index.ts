import _ from 'lodash';
import {GithubApiService} from './GithubApiService'
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();

if(process.argv.length < 3) {
    console.log("Please pass the Github username as an argument. Example- \n$ npm start johnDoe");
}
else
{
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount *(-1)]);            //sort repos by fork count in descending order
            user.repos = sortedRepos;

            console.log(user);
        });

        
    });

}