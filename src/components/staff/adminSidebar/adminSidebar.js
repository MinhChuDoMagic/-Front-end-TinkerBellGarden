import React, { Component } from "react";
import './dashboard.css'


export default class adminSidebar extends Component {
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
                        <a className="nav-link active text-light p-3 mb-2 bg-primary" href="#">
                          <span data-feather="home"></span>
                          Xem doanh thu <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                          <span data-feather="file"></span>
                          Thêm sự kiện
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

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">


                  <h2>Section title</h2>
                  <div className="table-responsive">
                    <table className="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Header</th>
                          <th>Header</th>
                          <th>Header</th>
                          <th>Header</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1,001</td>
                          <td>random</td>
                          <td>data</td>
                          <td>placeholder</td>
                          <td>text</td>
                        </tr>
                        <tr>
                          <td>1,002</td>
                          <td>placeholder</td>
                          <td>irrelevant</td>
                          <td>visual</td>
                          <td>layout</td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>data</td>
                          <td>rich</td>
                          <td>dashboard</td>
                          <td>tabular</td>
                        </tr>
                        <tr>
                          <td>1,003</td>
                          <td>information</td>
                          <td>placeholder</td>
                          <td>illustrative</td>
                          <td>data</td>
                        </tr>
                        <tr>
                          <td>1,004</td>
                          <td>text</td>
                          <td>random</td>
                          <td>layout</td>
                          <td>dashboard</td>
                        </tr>
                        <tr>
                          <td>1,005</td>
                          <td>dashboard</td>
                          <td>irrelevant</td>
                          <td>text</td>
                          <td>placeholder</td>
                        </tr>
                        <tr>
                          <td>1,006</td>
                          <td>dashboard</td>
                          <td>illustrative</td>
                          <td>rich</td>
                          <td>data</td>
                        </tr>
                        <tr>
                          <td>1,007</td>
                          <td>placeholder</td>
                          <td>tabular</td>
                          <td>information</td>
                          <td>irrelevant</td>
                        </tr>
                        <tr>
                          <td>1,008</td>
                          <td>random</td>
                          <td>data</td>
                          <td>placeholder</td>
                          <td>text</td>
                        </tr>
                        <tr>
                          <td>1,009</td>
                          <td>placeholder</td>
                          <td>irrelevant</td>
                          <td>visual</td>
                          <td>layout</td>
                        </tr>
                        <tr>
                          <td>1,010</td>
                          <td>data</td>
                          <td>rich</td>
                          <td>dashboard</td>
                          <td>tabular</td>
                        </tr>
                        <tr>
                          <td>1,011</td>
                          <td>information</td>
                          <td>placeholder</td>
                          <td>illustrative</td>
                          <td>data</td>
                        </tr>
                        <tr>
                          <td>1,012</td>
                          <td>text</td>
                          <td>placeholder</td>
                          <td>layout</td>
                          <td>dashboard</td>
                        </tr>
                        <tr>
                          <td>1,013</td>
                          <td>dashboard</td>
                          <td>irrelevant</td>
                          <td>text</td>
                          <td>visual</td>
                        </tr>
                        <tr>
                          <td>1,014</td>
                          <td>dashboard</td>
                          <td>illustrative</td>
                          <td>rich</td>
                          <td>data</td>
                        </tr>
                        <tr>
                          <td>1,015</td>
                          <td>random</td>
                          <td>tabular</td>
                          <td>information</td>
                          <td>text</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </main>
              </div>
            </div>

            </div>
        );
    }
}