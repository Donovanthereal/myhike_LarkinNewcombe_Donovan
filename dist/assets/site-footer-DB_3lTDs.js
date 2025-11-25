import{k as c,l as d,m as u,n as m,d as h,a as g,i as r,j as l,p}from"./app-DL_CYei6.js";async function C(t,e){return c(r,t,e)}async function k(t,e,n){const a=(await d(r,e,n)).user;await u(a,{displayName:t});try{await m(h(g,"users",a.uid),{name:t,email:e,country:"Canada",school:"BCIT"}),console.log("Firestore user document created successfully!")}catch(s){console.error("Error creating user document in Firestore:",s)}return a}async function v(){await p(r),window.location.href="index.html"}function S(t){return l(r,t)}function L(t){const e=(t?.code||"").toLowerCase();return{"auth/invalid-credential":"Wrong email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Try again later.","auth/email-already-in-use":"Email is already in use.","auth/weak-password":"Password too weak (min 6 characters).","auth/missing-password":"Password cannot be empty.","auth/network-request-failed":"Network error. Try again."}[e]||"Something went wrong. Please try again."}class b extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
            <a class="navbar-brand" href="/main.html">
            <img src="/images/drink1.png" height="36">
            DonovanHikes
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link" href="/main.html">Home</a>
                </li>
            
                <!-- NEW: Saved Hikes link -->
                <li class="nav-item">
                <a class="nav-link" href="/saved.html">Saved</a>
                </li>
            
            </ul>
            <div class="d-flex align-items-center gap-2 ms-lg-2" id="rightControls">
                <form class="d-flex align-items-center gap-2 my-2 my-lg-0" id="navSearch" role="search">
                <input class="form-control d-none d-sm-block w-auto" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light d-none d-sm-inline-block" type="submit">Search</button>
                </form>
                <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">
                <!-- populated by JS -->
            </div>
            </div>
        </div>
        </div>
        </nav>
    `}renderAuthControls(){const e=this.querySelector("#authControls"),n=this.querySelector("ul");e.innerHTML='<div class="btn btn-outline-light" style="visibility: hidden; min-width: 80px;">Log out</div>',l(r,i=>{let a;const s=n?.querySelector("#profileLink");if(s&&s.remove(),i){if(n){const o=document.createElement("li");o.classList.add("nav-item"),o.innerHTML='<a class="nav-link" id="profileLink" href="/profile.html">Profile</a>',n.appendChild(o)}a='<button class="btn btn-outline-light" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>',e.innerHTML=a,e.querySelector("#signOutBtn")?.addEventListener("click",v)}else s&&s.remove(),a='<a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>',e.innerHTML=a})}}customElements.define("site-navbar",b);class f extends HTMLElement{connectedCallback(){this.innerHTML=`
            <!-- Footer: single source of truth -->
            <footer class="py-3 my-4 border-top text-center">
                <p class="mb-0 text-muted">&copy; 2025 BCIT COMP1800</p>
            </footer>
        `}}customElements.define("site-footer",f);export{L as a,C as l,S as o,k as s};
