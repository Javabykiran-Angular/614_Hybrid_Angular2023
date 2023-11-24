
export class CourseService{
   private course:string[]=["Core Java",'HTML,CSS,JS','MySql','Advanced Java','Spring Boot','Angular 12','Docker','AWS','Jenkings','putty'];

   getCourse(){
    return this.course;
   }

}