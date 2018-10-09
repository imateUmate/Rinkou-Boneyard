var NAME = "拡張";
var YEAR = "";
var MONTH = "";
var MAN = "";
var LIFE = "";
var DEAD= "";

function doGet() {
  var output = HtmlService.createTemplateFromFile('select');
  return output.evaluate();
}

function select(){
  var tableId = '1l1TuBA17FR8HBMOUyJQISngEHgJgscDXQdupZ-D3';
  var sql = 'SELECT * FROM ' + tableId;
  //var sql = 'SELECT ROWID,Name,Month,Man,Live,Death FROM ' + tableId;
  var res = FusionTables.Query.sql(sql);
  return res.rows;
}

function selects(data){
   var tableId = '1l1TuBA17FR8HBMOUyJQISngEHgJgscDXQdupZ-D3';
   var query = "SELECT ROWID FROM " + tableId + " WHERE Name = '" + data + "';";
   var result  = FusionTables.Query.sql(query);
   query = "DELETE FROM " + tableId + " WHERE ROWID = '" + result.rows[0][0] + "'";
   FusionTables.Query.sql(query);
 return "撤去完了";
}

function search_ready(form){
  Logger.log(NAME);
  NAME = form.name;
  MONTH = form.month;
  MAN = form.man;
  LIFE = form.life;
  DEAD = form.dead;
  Logger.log(NAME);
  return NAME;
}

function search(form){
  var tableId = '1l1TuBA17FR8HBMOUyJQISngEHgJgscDXQdupZ-D3';
  
  var name = form.name;
  var month = form.month;
  var man = form.man;
  var life = form.life;
  var dead = form.dead;

  var sql = 'SELECT * FROM ' + tableId + " WHERE Name like '%" + name + "%'　AND Month like '%" + month + "%'";
  var res = FusionTables.Query.sql(sql);
  return res.rows;
}

function Insert(form){
  var tableId = '1l1TuBA17FR8HBMOUyJQISngEHgJgscDXQdupZ-D3';  
  var name = form.name;
  var month = form.month;
  var man = form.man;
  var life = form.life;
  var dead = form.dead;
  
  var sql = "INSERT INTO " + tableId + " ('Name','Month','Man','Live','Death')" + " VALUES ('" + name + "','" + month + "','" + man + "','" + life + "','" + dead + "')";
  var res = FusionTables.Query.sql(sql);
  return '墓標追加完了';
}

function getData(){
  return "<h2>OK</h2>";
}

function getPageHtml(page){
  var output = HtmlService.createTemplateFromFile(page);
  return output.evaluate().getContent();
}