const exprress = require('express');
const cors = require('cors');

const course = require('./routes/course.routes');
const organisation = require('./routes/organasation.routes');
const department = require('./routes/department.routes');
const designation = require('./routes/designation.routes');
const employee = require('./routes/employee.routes');
const skill = require('./routes/skill.routes');
const user = require('./routes/user.routes');
const vendor = require('./routes/vendor.routes');
const bulkupload = require('./routes/bulkupload.routes');
const {verifyauth} = require('./generator/authJwt');
const shedule = require('node-schedule');
const sessionStorage = require('sessionstorage');

const app = exprress();
corsOption = {
  origin: "*",
  methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204
}
app.use(cors(corsOption));
app.use(exprress.json());
app.use(exprress.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;



app.use(verifyauth)
app.use('/api/bulkUpload', bulkupload);
app.use('/api/course', course);
app.use('/api/department', department);
app.use('/api/designation', designation);
app.use('/api/employee', employee);
app.use('/api/organisation', organisation);
app.use('/api/skill', skill);
app.use('/api/user', user);
app.use('/api/vendor', vendor);

shedule.scheduleJob({hour: 23, minute: 59}, ()=>{
    sessionStorage.clear();
  });
app.listen(PORT,()=>{
    console.log(`connect on port: ${PORT}`);
})