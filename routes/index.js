var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const NodeCache = require('node-cache');
//reading for json files that contain secret variables

const path = require('path');
// security varaible
require('dotenv').config();


//sessions 
const session = require('express-session'); 
router.use(session({
  secret : 'ASDFGGHJJKKL',
  resave : false,
  saveUninitialized:false,
  cookie : {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}))

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb+srv://zeearm11:isylzjko544@cluster0.fr0gr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

main().then(()=>console.log('connected successfully')).catch(err => console.log(err));


const IndicatorContentSchema = new mongoose.Schema({
  indicator_key: { type: String, required: true },
  indicator_content: { type: [String], required: true }
});

const EducationInfoSchema = new mongoose.Schema({
  standard: { type: String, required: true },
  data_section: { type: Number, required: true },
  indicator: { type: [IndicatorContentSchema], required: true }
});

const data_schema = mongoose.model('EducationInfo', EducationInfoSchema);


router.get('/explore',async(req,res)=>{
  const newData = new data_schema({
    standard: "มาตรฐานที่ ๓ การพัฒนาคุณภาพการจัดการเรียนรู้",
    data_section:2,
    indicator: [
        {
            indicator_key: "ตัวชี้วัดที่ ๓.๑ การออกแบบหลักสูตรและแผนการจัดการเรียนรู้ที่เสริมสร้างสมรรถนะและคุณลักษณะที่พึงประสงค์",
            indicator_content: [
              "หลักสูตรสถานศึกษาที่เสริมสร้างการพัฒนาสมรรถนะและคุณลักษณะที่พึงประสงค์ให้เหมาะสมกับบริบทและการเปลี่ยนแปลง",
"แผนการจัดการเรียนรู้แต่ละกลุ่มสาระการเรียนรู้ที่เสริมสร้างสมรรถนะและคุณลักษณะ",
"คู่มือการวัดผลและประเมินผลตามหลักสูตรสถานศึกษา",
"ผลการประเมินการใช้หลักสูตรสถานศึกษา",
"ผลประเมินแผนการจัดการเรียนรู้",
"บันทึกหลังการจัดการเรียนรู้",
"เครื่องมือการวัดผลประเมินผลของแต่ละรายวิชา",
"โปรแกรมบันทึกผลการเรียน (ปพ.๕)",
"รายงานการประชุมที่เกี่ยวข้องกับการพัฒนาหลักสูตรสถานศึกษา",
"ข้อมูลผลการติดตามผู้จบหลักสูตร ปีการศึกษา ๒๕๖๓, ๒๕๖๔, ๒๕๖๕, ๒๕๖๖",
"ผลการพัฒนาหลักสูตร/แผนการเรียนของสถานศึกษาและเป็นแบบอย่างที่ดี หลักสูตร SMT",

            ]
        },
        {
          indicator_key: "ตัวชี้วัดที่ ๓.๒ การจัดกิจกรรมการเรียนรู้ที่เสริมสร้างสมรรถนะและคุณลักษณะที่พึงประสงค์",
          indicator_content: [
"หลักสูตรสถานศึกษา",
"แผนการจัดการเรียนรู้ และบันทึกหลังการจัดการเรียนรู้",
"บันทึกการจัดกิจกรรมพัฒนาผู้เรียน",
"รูปแบบหรือวิธีการจัดกิจกรรมการเรียนรู้ของครูในการเสริมสร้างสมรรถนะและคุณลักษณะที่พึงประสงค์ของผู้เรียนให้บรรลุตามเป้าหมาย",
"รูปแบบหรือวิธีการในการจัดกิจกรรมส่งเสริมให้ผู้เรียนสามารถนำตนเองในการเรียนรู้",
"ผลการจัดกิจกรรมบูรณาการส่งเสริมเจตคติที่ดีตามความต้องการ ความถนัดและความสนใจของผู้เรียน: กิจกรรมค่ายวิชาการ",
"แบบบันทึกผลการเรียน (ปพ.๕)",
"สรุปผลการประเมินสมรรถนะและคุณลักษณะที่พึงประสงค์",
"รายงานวิจัยในชั้นเรียน เพื่อแก้ไขและพัฒนาผู้เรียน",
"ผลงานและรางวัลที่ครูได้รับ",
"ผลการจัดกิจกรรมการเรียนรู้ที่เป็นแบบอย่างที่ดี",

          ]
      },
      {
        indicator_key: "ตัวชี้วัดที่ ๓.๓ ครูวัดและประเมินผลการเรียนรู้ของผู้เรียนอย่างเป็นระบบและต่อเนื่อง",
        indicator_content: [

"แผนการจัดการเรียนรู้ และบันทึกหลังการจัดการเรียนรู้",
"คู่มือการวัดผลและประเมินผลตามหลักสูตรสถานศึกษา",
"เครื่องมือการวัดและประเมินผลการเรียนรู้ของผู้เรียน",
"โปรแกรมงานทะเบียน",
"ระบบสารสนเทศการติดตามวัดและประเมินผลการเรียนรู้ของผู้เรียนรายบุคคล",
"แบบการรายงานผลการเรียน แบบ ปพ.๔, ปพ.๖",
"ผลการดำเนินโครงการกิจกรรมเพื่อพัฒนาศักยภาพผู้เรียนรายบุคคล ปีการศึกษา ๒๕๖๓, ๒๕๖๔, ๒๕๖๕, ๒๕๖๖",
"ระบบการส่งต่อและติดตามผลการเรียน และข้อมูลการจบหลักสูตร ปีการศึกษา ๒๕๖๓, ๒๕๖๔, ๒๕๖๕, ๒๕๖๖",
"แบบอย่างที่ดี ที่สอดคล้องกับการวัดผลประเมินผลผู้เรียนที่เป็นระบบ",
        ]
    },
 
    ]
  });
  await newData.save();
  res.send('Successfully Saved data')
})

router.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});


const myCache = new NodeCache({ stdTTL: 180 }); //ล้างแคชทุก 60 วิ

const fetchDataWithCache = async () => {
  const cacheKey = 'somethingtest'; 
  let data = myCache.get(cacheKey); 

  if (data) {
    return data;
  }

  data = await data_schema.find({}); 
  myCache.set(cacheKey, data); 
  return data;
};

function isAdmin(req,res,next) {
  if (req.session.token != undefined) {
    next()
  }
  return
}


router.get('/', async(req, res, next)=> {
  const results = await fetchDataWithCache();
  res.render('main',{results:results})
});


router.get('/editcontent/:datasort/:old_info/:index/:section',isAdmin,async(req, res) => {
  /* 
  condition [**indicator_keys**] for find in database,
  */
  let {datasort,old_info,index,section} = req.params  
  
  res.render('editcontent',{
    datasort:datasort,
    old_info:old_info,
    index:index,
    section:section
  })
});


router.post('/editcontent/:datasort/:old_info/:index/:section',isAdmin,async(req, res) => {
    let {datasort,old_info,index,section} = req.params
    let {edit_info} =  req.body
    
    let datapos = ""
    let path = ""
    if (datasort == "indicators") {
      path =   "indicator.indicator_key"
      datapos = "indicator.$.indicator_key"
    } else {

      //details
      old_info = { 
        $elemMatch: { $eq: old_info } 
      }
      path = "indicator.indicator_content"
      datapos = `indicator.$.indicator_content.${index}`
    }
    
    await data_schema.updateOne(
      { [path]: old_info , data_section : section },
      { $set: {[datapos] : edit_info } }
    );

    const cacheKey = 'somethingtest';
    myCache.del(cacheKey);

    res.redirect('/')
 
});

router.get('/deletecontent',async(req, res) => {

});

router.get('/additem',isAdmin,async(req,res)=>{

})

router.post('/additem',isAdmin,async(req, res) => {

});


router.get('/login',(req,res)=>{
  res.render('login')
})

router.post('/login',(req,res)=>{
  const {usr,pwd} = req.body
  if (usr.trim().length >= 8 && pwd.trim().length >= 8 ) {
    req.session.warningalert = undefined
    const envvalue = JSON.parse(process.env.USERS)
    if (usr == envvalue.username &&pwd == envvalue.password) {
      const user_role =  envvalue.role
      const token = jwt.sign({username:usr,role:user_role}, process.env.TOKEN_SECRET);
      req.session.token = token
      req.session.username = envvalue.username
      res.redirect('/')
    } else {
      req.session.warningalert = "ไม่พบบัญชีแอดมินของท่าน"
      res.redirect(req.get('referer'));
    }

  } else {
    req.session.warningalert = "Username or Password >= 8 characters!!!"
    res.redirect(req.get('referer'));
  }
})

router.get('*',(req,res)=>{
  res.send('ไม่พบหน้าเว็ฐ')
})

router.post('/logout',isAdmin,function(req, res){
  req.session.destroy();
  res.redirect('/login')
});

module.exports = router;
