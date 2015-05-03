// Map Function
// Name: users/by_birthday
// Reduce: _count

function (doc, meta) {
  
  if ( doc.type === "user" )
  {
    
    if ( typeof doc.birthday !== "undefined" )
    {
      emit( dateToArray(doc.birthday), { "name" : doc.first_name + " " + doc.last_name });
    }
  }
}
