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

//les accidents

async getAllAccident(req , res){
  try {
    const pool = await poolPromise
      const result = await pool.request()
      .query(queries.getAllAccident)
      res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
async addNewAccident(req , res){
  try {
    if(req.body.employee_id != null) {
      const pool = await poolPromise
      const result = await pool.request()
      .input('employee_id',sql.Int , req.body.employee_id)
      .input('accident_id',sql.Int , req.body.employee_id)
      .input('overtime_hours',sql.Int,req.body.overtime_hours)
      .input('accident_type',sql.VarChar , req.body.accident_type)
      .input('location',sql.VarChar , req.body.location)
      .input('year',sql.Int, req.body.year)
      .query(queries.addNewAccident)
      res.json(result)
    } else {
      res.send('Please fill all the details!')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
}
}
async updateAccidentDetails(req , res){
  try {
    const pool = await poolPromise
      const result = await pool.request()
      .input('accident_id',sql.Int , req.params.id)
      .input('overtime_hours',sql.Int,req.body.overtime_hours)
      .input('accident_type',sql.VarChar , req.body.accident_type)
      .input('location',sql.VarChar , req.body.location)
      .input('year',sql.Int, req.body.year)
      .query(queries.updateAccidentDetails)
      res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
async deleteAccident(req , res){
  try {
      const pool = await poolPromise
        const result = await pool.request()
        .input('accident_id',sql.Int, req.params.id)
        .query(queries.deleteAccident)
        res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


//recruitement
async getAllrecruitment(req , res){
  try {
    const pool = await poolPromise
      const result = await pool.request()
      .query(queries.getAllrecruitment)
      res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
async addNewrecruitment(req , res){
  try {
    if(req.body.id_recruitment != null) {
      const pool = await poolPromise
      const result = await pool.request()
      .input('id_recruitment',sql.Int , req.body.id_recruitment)
      .input('attrition',sql.Int,req.body.attrition)
      .input('recruiting_source',sql.VarChar,req.body.recruiting_source)
      .input('sales_quota_pct',sql.Float, req.body.sales_quota_pct)
      .input('performance_rating',sql.Int , req.body.performance_rating)
      .query(queries.addNewrecruitment)
      res.json(result)
    } else {
      res.send('Please fill all the details!')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
}
}
async updaterecruitmentDetails(req , res){
  try {
    const pool = await poolPromise
      const result = await pool.request()
      .input('id_recruitment',sql.Int,req.params.id)
      .input('attrition',sql.Int,req.body.attrition)
      .input('recruiting_source',sql.VarChar,req.body.recruiting_source)
      .input('sales_quota_pct',sql.Float, req.body.sales_quota_pct)
      .input('performance_rating',sql.Int, req.body.performance_rating)
      .query(queries.updaterecruitmentDetails)
      res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
async deleterecruitment(req , res){
  try {
      const pool = await poolPromise
        const result = await pool.request()
        .input('id_recruitment',sql.Int, req.params.id)
        .query(queries.deleterecruitment)
        res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
}

const controller = new MainController()
module.exports = controller;


