import React, { Component } from "react";

export default class addEvent extends Component {
    render() {
        return (
            <div className="db">
            {/* <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav> */}

            <div className="container-fluid">
              <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                  <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active text-light " href="#">
                          <span data-feather="home"></span>
                          Xem doanh thu 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light p-3 mb-2 bg-primary" href="#">
                          <span data-feather="file"></span>
                          Thêm sự kiện <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          <span data-feather="shopping-cart"></span>
                          Quản lý nhân viên
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          <span data-feather="users"></span>
                          Customers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          <span data-feather="bar-chart-2"></span>
                          Reports
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          <span data-feather="layers"></span>
                          Integrations
                        </a>
                      </li>
                    </ul>

                    {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                      <span>Saved reports</span>
                      <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                      </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Current month
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Last quarter
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Social engagement
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span data-feather="file-text"></span>
                          Year-end sale
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </nav>

                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">


                <form>
                        <h3>Thêm sự kiện</h3>

                        <div className="form-group">
                            <label>Tiêu đề</label>
                            <input type="text" className="form-control" placeholder="Nhập tên sự kiện" />
                        </div>

                        <div className="form-group">
                            <label>Mô tả</label>
                            <input type="text" className="form-control" placeholder="Nhập mô tả ngắn" />
                        </div>

                        <div className="form-group">
                            <label>Nhập nội dung</label>
                            <textarea className="form-control" type="text" rows="6" placeholder="Nhập nội dung"></textarea>
                        </div>

                        <div className="form-group">
                            <label>Thêm ảnh 1</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"  accept="image/png, image/jpeg" />
                        </div>

                        <div className="form-group">
                            <label>Thêm ảnh 2</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"  accept="image/png, image/jpeg" />
                        </div>

                        <div className="form-group">
                            <label>Thêm ảnh 3</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"  accept="image/png, image/jpeg" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                    </form>
                </div>
              </div>
            </div>

            </div>

        );
    }
}