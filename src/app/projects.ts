export class Projects {
    id: number;
    name: string;
    github: string;
    smallDesc: string;
    description: string;
    image: string;
    imageList: string[];
    teknologies: string[];

    constructor(id: number, name: string, github: string, smallDesc: string, description: string, image: string, imageList: string[], teknologies: string[]) {
        this.id = id;
        this.name = name;
        this.github = github;
        this.smallDesc = smallDesc;
        this.description = description;
        this.image = image;
        this.imageList = imageList;
        this.teknologies = teknologies;
    }
}
