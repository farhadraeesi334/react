export default function Menu(){
return(
<>
 <nav class="navbar">
    <div class="logo">سایت من</div>
    <div class="nav-links" id="navLinks">
      <a href="#">خانه</a>
      <a href="#">درباره ما</a>
      <a href="#">خدمات</a>
      <a href="#">تماس</a>
    </div>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</>
)
}
