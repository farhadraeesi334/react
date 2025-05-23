
function Header(){
    const Islogin=true;

return(
    <>
    <header>
      {Islogin ? <><button>داشبورد</button> <button>سبد خرید</button></> : <><button>ورود و عضویت</button></>}
    </header>
    </>
)

    
    
}
export default Header;