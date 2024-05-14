"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const Student_1 = require("./entities/Student");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield core_1.MikroORM.init(Object.assign(Object.assign({}, mikro_orm_config_1.default), { allowGlobalContext: true }));
    const generator = orm.getSchemaGenerator();
    //   await generator.dropSchema(); // it drops the table
    //   await generator.createSchema(); // it creates the table.
    //   await orm.getMigrator().up; // optional
    //Getting Student details
    app.get('/apiget/student', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const employees = yield orm.em.find(Student_1.Student, {});
            if (employees) {
                res.status(200).json(employees);
            }
            else {
                console.log("No records found!");
                res.status(404).json({ message: "No table found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
            console.log("catch error", error);
        }
    }));
    //Inserting student details
    app.post('/apipost/studentAdd', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //   const entityManager = req.em as EntityManager;
            const student = new Student_1.Student();
            student.name = req.body.name;
            student.dob = req.body.dob;
            student.age = req.body.age;
            student.createdUsername = req.body.createdUsername;
            student.updatedUsername = req.body.updatedUsername;
            student.subject1 = req.body.subject1;
            student.mark1 = req.body.mark1;
            student.subject2 = req.body.subject2;
            student.mark2 = req.body.mark2;
            yield orm.em.persistAndFlush(student);
            //   res.json(student);
            res.status(200).json({ message: "Data added successfully" }); //data posting and updating in db also but getting error
        }
        catch (error) {
            console.log("catch error", error);
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    //Perform update
    app.put('/apiput/studentUpdate/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        console.log("Id check in update", id);
        console.log("type check of update", typeof (id));
        const student = yield orm.em.findOne(Student_1.Student, { id: +id });
        if (!student)
            return res.status(404).json({ error: 'Employee not found' });
        const { name, dob, age, createdUser, updatedUser, subject1, mark1, subject2, mark2 } = req.body;
        if (name !== undefined) {
            student.name = req.body.name;
        }
        if (dob !== undefined) {
            student.dob = req.body.dob;
        }
        if (age !== undefined) {
            student.age = req.body.age;
        }
        if (createdUser !== undefined) {
            student.createdUsername = createdUser;
        }
        if (updatedUser !== undefined) {
            student.updatedUsername = updatedUser;
        }
        if (subject1 !== undefined) {
            student.subject1 = subject1;
        }
        if (mark1 !== undefined) {
            student.mark1 = mark1;
        }
        if (subject2 !== undefined) {
            student.subject2 = subject2;
        }
        if (mark2 !== undefined) {
            student.mark2 = mark2;
        }
        yield orm.em.persistAndFlush(student);
        res.status(200).json({ data: student, message: "Details Updated Successfully" });
    }));
    //perform Delete
    app.delete('/apidelete/studentDelete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const student = yield orm.em.findOne(Student_1.Student, { id: +id });
        if (!student)
            return res.status(404).json({ error: 'Student not found' });
        yield orm.em.removeAndFlush(student);
        res.status(200).json({ message: "Data removed successfully" });
    }));
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
startServer();
//Errors and Solutions
//error1 - ValidationError: Using global EntityManager instance methods for context specific actions is disallowed.
//Solution1 -  MikroORM.init({...mikroOrmConfig,allowGlobalContext:true}); changed from  MikroORM.init(mikroOrmConfig);
//Findings
// Need to create the table for first time using the getSchemagenerator() for the next time while creating the same may result error.
