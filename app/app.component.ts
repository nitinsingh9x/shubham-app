import { User } from './shared/models/user';
import { Component} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl:'./app/app.component.html'
})
export class AppComponent{
    message = 'hello';
    users:User[] = [
        {id:25,name:'chetan',username:'chetans311'},
        {id:26,name:'vishnu',username:'vishnus311'},
        {id:27,name:'nitin',username:'nitins311'}
    ];

    activeUser:User;

    selectUser(user:User){
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(data){
        this.users.push(data.user);
        console.log(data);
    }
}