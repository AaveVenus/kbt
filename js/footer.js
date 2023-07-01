const footer = document.createElement('div');
footer.innerHTML = '' + 
    '<div class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">' +
    '    <div class="container py-5">' +
    '        <div class="row g-5">' +
    '            <div class="col-md-6">' +
    '                <h1 class="text-primary mb-4"><img class="img-fluid me-2" src="img/logo.png" alt="" style="width: 45px;">INFOMUNCAK</h1>' +
    '                <span>Dalam mencari informasi pendakian, kini aksesnya menjadi lebih mudah dan cepat berkat kemajuan teknologi informasi, dengan situs pendakian yang menyediakan informasi lengkap, forum diskusi untuk berbagi pengalaman, dan aplikasi pendakian untuk memantau posisi saat mendaki serta memudahkan menentukan rute yang tepat, sehingga mempersiapkan diri dengan baik dan meminimalkan risiko kecelakaan saat mendaki.</span>' +
    '            </div>' +
    '            <div class="col-md-6">' +
    '                <h5 class="mb-4">Newsletter</h5>' +
    '                <p>Dapatkan promo menarik dengan daftar disini!!</p>' +
    '                <div class="position-relative">' +
    '                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">' +
    '                        <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>' +
    '                </div>' +
    '            </div>' +
    '            <div class="col-lg-3 col-md-6">' +
    '                <h5 class="mb-4">Get In Touch</h5>' +
    '                <p><i class="fa fa-map-marker-alt me-3"></i>Malang, East Java</p>' +
    '                <p><i class="fa fa-phone-alt me-3"></i>+628123456789</p>' +
    '                <p><i class="fa fa-envelope me-3"></i>infomuncak@gmail.com</p>' +
    '            </div>' +
    '            <div class="col-lg-3 col-md-6">' +
    '                <h5 class="mb-4">Quick Links</h5>' +
    '                <a class="btn btn-link" href="">About Us</a>' +
    '                <a class="btn btn-link" href="">Contact Us</a>' +
    '                <a class="btn btn-link" href="">Our Services</a>' +
    '            </div>' +
    '            <div class="col-lg-3 col-md-6">' +
    '                <h5 class="mb-4">Follow Us</h5>' +
    '                <div class="d-flex">' +
    '                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>' +
    '                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>' +
    '                    <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-instagram"></i></a>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '    <div class="container-fluid copyright">' +
    '        <div class="container">' +
    '            <div class="row">' +
    '                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">' +
    '                    &copy; <a href="#">INFOMUNCAK</a>, All Right Reserved.' +
    '                </div>' +
    '                <div class="col-md-6 text-center text-md-end">' +
    '                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you\'d like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->' +
    '                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('test').appendChild(footer);