


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.createElement("div");
    const footer = document.createElement("div");

    navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5"> 
    <a href="index.html" class="navbar-brand d-flex align-items-center">
        <h2 class="m-0 text-primary"><img class="img-fluid me-2" src="img/logo.png" alt="" style="width: 45px;"></img>INFOMUNCAK</h2>
    </a> <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-4 py-lg-0">
            <a href="index.html" class="nav-item nav-link">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Service</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu shadow-sm m-0">
                    <a href="faq.html" class="dropdown-item nav-item">FAQs</a>
                    <a href="404.html" class="dropdown-item nav-item">404 Page</a> </div>
            </div> 
            <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
        <div class="h-100 d-lg-inline-flex align-items-center d-none"> 
            <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i class="fab fa-facebook-f"></i></a> 
            <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i class="fab fa-twitter"></i></a> 
            <a class="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</nav>`;

    footer.innerHTML = `
<div class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-md-6">
                <h1 class="text-primary mb-4"><img class="img-fluid me-2" src="img/logo.png" alt="" style="width: 45px;">INFOMUNCAK</h1>
                <span>Dalam mencari informasi pendakian, kini aksesnya menjadi lebih mudah dan cepat berkat kemajuan teknologi informasi, dengan situs pendakian yang menyediakan informasi lengkap, forum diskusi untuk berbagi pengalaman, dan aplikasi pendakian untuk memantau posisi saat mendaki serta memudahkan menentukan rute yang tepat, sehingga mempersiapkan diri dengan baik dan meminimalkan risiko kecelakaan saat mendaki.</span>
            </div>
            <div class="col-md-6">
                <h5 class="mb-4">Newsletter</h5>
                <p>Dapatkan promo menarik dengan daftar disini!!</p>
                <div class="position-relative">
                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                    <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="mb-4">Get In Touch</h5>
                <p><i class="fa fa-map-marker-alt me-3"></i>Malang, East Java</p>
                <p><i class="fa fa-phone-alt me-3"></i>+628123456789</p>
                <p><i class="fa fa-envelope me-3"></i>infomuncak@gmail.com</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="mb-4">Quick Links</h5>
                <a class="btn btn-link" href="">About Us</a>
                <a class="btn btn-link" href="">Contact Us</a>
                <a class="btn btn-link" href="">Our Services</a>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="mb-4">Follow Us</h5>
                <div class="d-flex">
                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">INFOMUNCAK</a>, All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

    document.getElementById("navbar").appendChild(navbar);
    document.getElementById("footer").appendChild(footer);

    var currentActive = window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
    );

    if (currentActive == "faq.html" || currentActive == "404.html") {
        navbar.querySelector('a[href="#"]').classList.add("active");
    }
    
    var selector = 'a[href="' + currentActive + '"].nav-item';
    
    navbar.querySelector(selector).classList.add("active");
}); 
