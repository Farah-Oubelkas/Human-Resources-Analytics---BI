const { sql,poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

//Les employées

    async getAllEmployees(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllEmployees)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async addNewEmployee(req , res){
      try {
        if(req.body.employee_id != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('employee_id',sql.Int , req.body.employee_id)
          .input('department',sql.VarChar , req.body.department)
          .input('salary',sql.Float,req.body.salary)
          .input('job_level',sql.VarChar , req.body.job_level)
          .input('gender',sql.VarChar , req.body.gender)
          .input('new_hire',sql.VarChar,req.body.new_hire)
          .input('vacation_days_taken',sql.Int , req.body.vacation_days_taken)
          .input('engagement',sql.Int, req.body.engagement)
          .input('rating',sql.Int,req.body.rating)
          .query(queries.addNewEmployee)
          res.json(result)
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async updateEmployeeDetails(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .input('employee_id',sql.Int , req.params.id)
          .input('department',sql.VarChar , req.body.department)
          .input('salary',sql.Float,req.body.salary)
          .input('job_level',sql.VarChar , req.body.job_level)
          .input('gender',sql.VarChar , req.body.gender)
          .input('new_hire',sql.VarChar,req.body.new_hire)
          .input('vacation_days_taken',sql.Int , req.body.vacation_days_taken)
          .input('engagement',sql.Int, req.body.engagement)
          .input('rating',sql.Int,req.body.rating)
          .query(queries.updateEmployeeDetails)
          res.json(result)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deleteEmployee(req , res){
      try {
          const pool = await poolPromise
            const result = await pool.request()
            .input('employee_id',sql.Int, req.params.id)
            .query(queries.deleteEmployee)
            res.json(result)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
}

const controller = new MainController()
module.exports = controller;


