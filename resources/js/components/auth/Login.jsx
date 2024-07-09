import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useCsrf } from '../CsrfContext';
import $ from 'jquery';
function Page() {
 
    const csrfToken = useCsrf();
    const navigate = useNavigate();

    useEffect(() => {
        $('#loginForm').on('submit', function(e) {
            e.preventDefault();
            const email = $('#yourEmail').val();
            const password = $('#yourPassword').val();

            axios.post('/login', {
                email: email,
                password: password,
                _token: csrfToken
            })
            .then(response => {
                alert('Login successful');
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('There was an error logging in!', error);
            });
        });

        return () => {
            $('#loginForm').off('submit');
        };
    }, [csrfToken, navigate]);


    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <Link to="/" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt="" />
                                            <span className="d-none d-lg-block">NiceAdmin</span>
                                        </Link>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p className="text-center small">Enter your Email & password to login</p>
                                            </div>
                                            <form className="row g-3 needs-validation" method='POST' id='loginForm' noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Email</label>
                                                    <input type="text" name="email" className="form-control" id="yourEmail" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Login</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <Link to="/pages-register">Create an account</Link></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Page;
