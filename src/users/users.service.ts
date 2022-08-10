import { Injectable } from '@nestjs/common';
export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};



@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id:1,
            name: "Mbiet",
            username:"Embee", 
            password: "unique",
        },

        {
            id:2,
            name: "Agatha",
            username:"love", 
            password: "udom",
        },

    ];

    async findOne ( username:string): Promise < User | undefined> {
        return this.users.find((user) => user.username === username )
    }

    // async findAll (username:string): Promise < User[] | undefined> {
    //     return this.users.push((user) => user.username === username )
    // }

}
