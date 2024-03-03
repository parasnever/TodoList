

 export function Navbar() {
  return (
   <div 
   style={{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
   }}>
    <img
    style={{
        width: "150px"
    }}
     src="https://skillprompt-website.s3.ap-south-1.amazonaws.com/assets/company_logo/logo.png" alt="logo" />
    {/*Input box fo search */}



    <input type="text"
    style={{
        padding: '5px'
    }} 
    placeholder="search posts"
    name="search"/>
   </div>
  )
}

