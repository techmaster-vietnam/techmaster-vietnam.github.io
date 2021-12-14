function Rating(props){
    let rater=[];
    for(let i=0;i<props.value;i++){
     rater.push(<i key={i} class="fa fa-star"></i>)
    }
    return rater;
}
class MyContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Infor: [
                {
                    id: 1,
                    thumbnail: '../img/ks2.jpg',
                    name: "Bách Xanh House",
                    local: 'Cách trung tâm 100m',
                    price: 'Từ 500.000đ/1 đêm',
                    rate:3

                },
                {
                    id: 2,
                    thumbnail: '../img/ks01.jpg',
                    name: "Chằn May Hotel",
                    local: 'Cách trung tâm 200m',
                    price: 'Từ 300.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 3,
                    thumbnail: '../img/ks02.jpg',
                    name: "Anh Minh Hotel",
                    local: 'Cách trung tâm 150m',
                    price: 'Từ 200.000đ/1 đêm',
                    rate: 2
                },
                {
                    id: 4,
                    thumbnail: '../img/ks03.jpg',
                    name: "Hòa Bình Hotel",
                    local: 'Cách trung tâm 600m',
                    price: 'Từ 600.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 5,
                    thumbnail: '../img/ks04.jpg',
                    name: "Thắng Lợi Hotel",
                    local: 'Cách trung tâm 100m',
                    price: 'Từ 2.500.000đ/1 đêm',
                    rate:3
                },
                {
                
                    id: 6,
                    thumbnail: '../img/ks06.jpg',
                    name: "Cây Thông Hotel",
                    local: 'Cách trung tâm 300m',
                    price: 'Từ 3.500.000đ/1 đêm',
                    rate: 2
                },
                {
                    id: 7,
                    thumbnail: '../img/ks08.jpg',
                    name: "Ngọc Huyền Hotel",
                    local: 'Cách trung tâm 300m',
                    price: 'Từ 1.500.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 8,
                    thumbnail: '../img/ks09.jpg',
                    name: "Nam Á Hotel",
                    local: 'Cách trung tâm 150m',
                    price: 'Từ 7.000.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 9,
                    thumbnail: '../img/ks14.jpg',
                    name: "Trâm Ánh Resort",
                    local: 'Gần quán gió',
                    price: 'Từ 5.500.000đ/1 đêm',
                    rate: 4
                },
                {
                    id: 10,
                    thumbnail: '../img/ks14.jpg',
                    name: "Trâm Ánh Resort",
                    local: 'Gần quán gió',
                    price: 'Từ 5.500.000đ/1đêm',
                    rate: 4
                },
                {
                    id: 11,
                    thumbnail: '../img/ks12.jpg',
                    name: "Hương Rừng Hotel",
                    local: 'Gần quán gió',
                    price: 'Từ 850.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 12,
                    thumbnail: '../img/ks11.jpg',
                    name: "Tam Đảo Gold",
                    local: 'Gần quán gió',
                    price: 'Từ 600.000đ/1 đêm',
                    rate: 3
                },
                {
                    id: 13,
                    thumbnail: '../img/ks15.jpg',
                    name: "Anh Đức Hotel",
                    local: 'Gần quán gió',
                    price: 'Từ 480.000đ/1 đêm',
                    rate:2
                },
                {
                    id: 14,
                    thumbnail: '../img/ks16.jpg',
                    name: "Ngọc Sơn Hotel",
                    local: 'Gần quán gió',
                    price: 'Từ 800.000đ/1 đêm',
                    rate: 2
                },
                {
                    id: 15,
                    thumbnail: '../img/ks16.jpg',
                    name: "Sofia Hotel & Spa",
                    local: 'Gần quán gió',
                    price: 'Từ 1.200.000đ/1 đêm',
                    rate: 3
                }
            ]
        }
    }
    render() {
        const listItem = this.state.Infor;
        let item=[];
        
        for(let i=0;i<listItem.length;i++){
            
            const list=listItem[i];
           item.push(<div className="col-sm-4 col-lg-3 pt-1 pb-3 productItem" data-price="5-10" data-level={4} data-popularity={5} data-comment={4} data-kindhouse="canho" key={list.id}>
                <a href="chitiet.html" className="card-title">
                    <img src={list.thumbnail} className="card-img-top" alt="IMG-PRODUCT" style={{ paddingBottom: '.5rem'}} />
                    <i className="fa fa-flag-o icon-ks" /><b className="ten-ks">{list.name}</b>
                    <p className="item-ks"><i className="fas fa-search-location icon-ks" />{list.local}</p>
                    <p className="item-ks gia"><i className="	far fa-kiss-wink-heart icon-ks" />{list.price}</p>
                    <p className="item-ks"><i className="	fab fa-angellist icon-ks" />Đánh giá:<Rating value={list.rate} />
                    <br />
                    {/* cách 2 in rating */}
                    {/* { function() {
                            let rating = [];
                            for (let i = 0; i < list.rate; i++) {
                                rating.push(<i key={i} className="fa fa-star"></i>)
                            }
                            return rating;
                        }() } */}
                        </p>
                </a>
            </div>
           );
        }
        return (
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb" className="thanhtrang">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html" style={{ color: '#0077cc !important' }}>Trang chủ</a></li>
                            <li className="breadcrumb-item"><a href="dichvu.html" style={{ color: '#0077cc !important' }}>Dịch Vụ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Khách Sạn</li>
                        </ol>
                        <p style={{ paddingLeft: '1rem', opacity: '.7' }}>(Hiện có <b>22</b> hotel trống)</p>
                    </nav>
                    <div className="row">
                        <div className=" test" >
                            <div className="card">
                                <article className="card-group-item">
                                    <div className="card-header">
                                        <h6 className="title" style={{ margin: 0, fontSize: 18 }}><b>Chọn lọc theo:</b></h6>
                                    </div>
                                    <div className="filter-content">
                                        <div className="card-body">
                                            <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                    <span className="form-check-label">
                                                        1 sao
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={2} />
                                                    <span className="form-check-label">
                                                        2 sao
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={3} />
                                                    <span className="form-check-label">
                                                        3 sao
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={4} />
                                                    <span className="form-check-label">
                                                        4 sao
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={5} />
                                                    <span className="form-check-label">
                                                        5 sao
                        </span>
                                                </label> {/* form-check.// */}
                                            </form>
                                            <hr />
                                            <p className="ten-luachon">Mức Giá</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="0-5" />
                                                    <span className="form-check-label">
                                                        Dưới 500.000đ
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="5-10" />
                                                    <span className="form-check-label">
                                                        Từ 500.000đ-1.000.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="10-20" />
                                                    <span className="form-check-label">
                                                        Từ 1.000.000đ-2.000.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="20-50" />
                                                    <span className="form-check-label">
                                                        Từ 2.000.000đ-5.000.000đ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue={50} />
                                                    <span className="form-check-label">
                                                        Trên 5.000.000đ </span>
                                                </label> {/* form-check.// */}
                                            </form>
                                            <hr />
                                            <p className="ten-luachon">Loại chỗ ở</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="nhanghi" />
                                                    <span className="form-check-label">
                                                        Nhà nghỉ
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="resort" />
                                                    <span className="form-check-label">
                                                        Resort </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="canho" />
                                                    <span className="form-check-label">
                                                        Căn hộ </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue="bietthu" />
                                                    <span className="form-check-label">
                                                        Biệt thự </span>
                                                </label> {/* form-check.// */}
                                            </form>
                                            <hr />
                                            <p className="ten-luachon">Tiện nghi</p>
                                            <form>
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Hệ thống cách âm
                        </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Phòng tắm riêng </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Tầm nhìn ra khung cảnh </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Ban công </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Tivi 4k</span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Dịch vụ phòng </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Nhà hàng </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Phục vụ đồ ăn </span>
                                                </label> {/* form-check.// */}
                                                <label className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-label">
                                                        Thang máy </span>
                                                </label> {/* form-check.// */}
                                                <hr id="hr" />
                                                <a id="btn-hide" >Thêm tiện ích <i className="far fa-hand-point-down" style={{ paddingLeft: '.5rem' }} /></a>
                                                <div id="noidung-an">
                                                    <label className="form-check ">
                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                        <span className="form-check-label">
                                                            Phòng thể dục </span>
                                                    </label> {/* form-check.// */}
                                                    <label className="form-check ">
                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                        <span className="form-check-label">
                                                            Trung tâm Spa </span>
                                                    </label> {/* form-check.// */}
                                                </div>
                                            </form>
                                        </div> {/* card-body.// */}
                                    </div>
                                </article></div>
                        </div>
                        {/* formmobile */}
                        <div className=" test2">
                            <div className="row">
                                <p className="sx2">Sắp xếp theo</p>
                                <div className="col-sm-8 loc1">
                                    <div className="dropdown list-mobile loc">
                                        <button className="btn1 loc2 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bộ lọc</button>
                                        <div className="dropdown-menu list-mobile2" aria-labelledby="dropdownMenuButton">
                                            <div className=" test3">
                                                <div className="card test4">
                                                    <article className="card-group-item">
                                                        <div className="filter-content">
                                                            <div className="card-body">
                                                                <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                                        <span className="form-check-label">
                                                                            1 sao
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={2} />
                                                                        <span className="form-check-label">
                                                                            2 sao
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={3} />
                                                                        <span className="form-check-label">
                                                                            3 sao
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={4} />
                                                                        <span className="form-check-label">
                                                                            4 sao
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={5} />
                                                                        <span className="form-check-label">
                                                                            5 sao
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>
                                                                <hr />
                                                                <p className="ten-luachon">Mức Giá</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="0-5" />
                                                                        <span className="form-check-label">
                                                                            Dưới 500.000đ
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="5-10" />
                                                                        <span className="form-check-label">
                                                                            Từ 500.000đ-1.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="10-20" />
                                                                        <span className="form-check-label">
                                                                            Từ 1.000.000đ-2.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="20-50" />
                                                                        <span className="form-check-label">
                                                                            Từ 2.000.000đ-5.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue={50} />
                                                                        <span className="form-check-label">
                                                                            Trên 5.000.000đ </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>
                                                                <hr />
                                                                <p className="ten-luachon">Loại chỗ ở</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="nhanghi" />
                                                                        <span className="form-check-label">
                                                                            Nhà nghỉ
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="resort" />
                                                                        <span className="form-check-label">
                                                                            Resort </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="canho" />
                                                                        <span className="form-check-label">
                                                                            Căn hộ </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="bietthu" />
                                                                        <span className="form-check-label">
                                                                            Biệt thự </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>
                                                                <hr />
                                                                <p className="ten-luachon">Tiện nghi</p>
                                                                <form>
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Hệ thống cách âm
                                  </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Phòng tắm riêng </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Tầm nhìn ra khung cảnh </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Ban công </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Tivi 4k</span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Dịch vụ phòng </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Nhà hàng </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Phục vụ đồ ăn </span>
                                                                    </label> {/* form-check.// */}
                                                                    <label className="form-check">
                                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                                        <span className="form-check-label">
                                                                            Thang máy </span>
                                                                    </label> {/* form-check.// */}
                                                                </form>
                                                            </div> {/* card-body.// */}
                                                        </div>
                                                    </article></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="sx">Sắp xếp theo </p><div className="dropdown loc2 ">
                                        <button className=" btn1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Giá Phòng
                  </button>
                                        <div className="dropdown-menu gia12" aria-labelledby="dropdownMenu2">
                                            <button className="dropdown-item" type="button" >Giá tăng dần</button>
                                            <button className="dropdown-item" type="button" >Giá giảm dần</button>
                                        </div>
                                    </div>
                                    <div className="dropdown loc2">
                                        <button className=" btn1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Đánh Giá
                  </button>
                                        <div className="dropdown-menu gia12" aria-labelledby="dropdownMenu2">
                                            <button className="dropdown-item" type="button" >Đánh giá cao nhất</button>
                                            <button className="dropdown-item" type="button" >Đánh giá thấp nhất</button>
                                        </div>
                                    </div>
                                    <p />
                                </div>
                                <div className="col-sm-4" type="search">
                                    <input type="text" className="example" onkeyup="searchName()" id="myFilter" placeholder=" Nhập tên khách sạn..." style={{ fontFamily: 'Arial, FontAwesome' }} name="search" />
                                </div>
                            </div>
                            <div className="row products " style={{ paddingTop: '1rem' }} id="products1">
                                {/* danh sách khách sạn */}
                                {item}
                            </div>
                        </div>
                    </div>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true" disabled style={{ opacity: '.7' }}>Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href='#'>1</a></li>
                        <li className="page-item"><a className="page-link" href='#'>2</a></li>
                        <li className="page-item"><a className="page-link" href='#'>3</a></li>
                        <li className="page-item">
                            <a className="page-link" href='#'>Next</a>
                        </li>
                    </ul>
                </div>
            </section>


        )
    }


}

