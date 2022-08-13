export class Register {
    username: string;
    email: string;
    password: string;

    constructor(options: any = {}) {
        this.username = options.username ? options.username : '';
        this.email = options.email ? options.email : '';
        this.password = options.password ? options.password : '';

    }

}