import React from 'react'

export default function ContactContent() {
  return (
    <>
          <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                  <div class="w-100 pt-1 mb-5 text-right">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="get" class="modal-content modal-body border-0 p-0">
                      <div class="input-group mb-2">
                          <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                          <button type="submit" class="input-group-text bg-success text-light">
                              <i class="fa fa-fw fa-search text-white"></i>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
          {/* <!-- Start Content Page --> */}
          <div class="container-fluid bg-light py-5">
              <div class="col-md-6 m-auto text-center">
                  <h1 class="h1">Contact Us</h1>
                  <p>
                      Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet.
                  </p>
              </div>
          </div>

          {/* <!-- Start Map --> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6676402282897!2d72.55940447610547!3d23.035972415826503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e856703bfcd75%3A0xdd9ac4f282089ae8!2sGrras%20Solutions!5e0!3m2!1sen!2sin!4v1695380160998!5m2!1sen!2sin" width="100%" height="300px" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <!-- Ena Map --> */}

          {/* <!-- Start Contact --> */}
          <div class="container py-5">
              <div class="row py-5">
                  <form class="col-md-9 m-auto" method="post" role="form">
                      <div class="row">
                          <div class="form-group col-md-6 mb-3">
                              <label for="inputname">Name</label>
                              <input type="text" class="form-control mt-1" id="name" name="name" placeholder="Name" />
                          </div>
                          <div class="form-group col-md-6 mb-3">
                              <label for="inputemail">Email</label>
                              <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Email" />
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="inputsubject">Subject</label>
                          <input type="text" class="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                      </div>
                      <div class="mb-3">
                          <label for="inputmessage">Message</label>
                          <textarea class="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                      </div>
                      <div class="row">
                          <div class="col text-end mt-2">
                              <button type="submit" class="btn btn-success btn-lg px-3">Let’s Talk</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
          {/* <!--End Contact-->    */}
    </>
  )
}
