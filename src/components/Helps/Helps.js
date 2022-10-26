import './Helps.css'

export default function Helps() {
    return (
        <div>
            <button className="previous-button">
                <i class="fal fa-chevron-left icon-back"></i>
            </button>
            <div className="title">
                Trợ giúp
            </div>
            <div className="helps-content">

            </div>
            <div className="content-title-icon purple">
                
            </div>
            <span className="content-title-text purple">Các câu hỏi thường gặp</span>

            <div className="question-1">
                Câu 1: <br/>
                Làm thế nào để đổi mật khẩu?
            </div>
            <div className="answer-1">
                Chọn mục "Tài khoản" -<span className="code-arrow">&#62;</span> Chọn mục "Cài đặt" -<span className="code-arrow">&#62;</span> Chọn mục đổi mật khẩu
            </div>
            <hr className="help-hr-1"></hr>

            <div className="question-2">
                Câu 2: <br/>
                Không hiện địa chỉ thu hộ?
            </div>
            <div className="answer-2">
                Chọn mục "Tài khoản" -&#62; chọn mục "Cài đặt" -&#62; Chọn mục "Đổi mật khẩu"
            </div>
            <hr className="help-hr-2"></hr>

            <div className="question-3">
                Câu 3: <br />
                Cách nạp điểm
            </div>
            <div className="answer-3">
                Chọn mục "Tài khoản" -&#62; Chọn mục "Cài đặt" -&#62; Chọn mục "Đổi mật khẩu"
            </div>
            <hr className="help-hr-3"></hr>

            <div className="question-4">
                Câu 4: <br/>
                Cách nạp điểm
            </div>
            <div className="answer-4">
                Chọn mục "Tài khoản" -&#62; Chọn mục "Cài đặt" -&#62; Chọn mục "Đổi mật khẩu"
            </div>
            <hr className="help-hr-4"></hr>

            <div className="question-5">
                Câu 5: <br/>
                Cách nạp điểm
            </div>
            <div className="answer-5">
                Chọn mục "Tài khoản" -&#62; Chọn mục "Cài đặt" -&#62; Chọn mục "Đổi mật khẩu"
            </div>
            
            <i class="fas fa-phone-alt helps-icon-contact"></i>
            <div className="helps-icon-background"></div>

            <div className="help-number-hotline">
                Hotline: 1900 1009
            </div>

            <div className="helps-footer">Hãy gọi vào số Hotline để được hỗ trợ trực tuyến!</div>
        </div>
    )
}