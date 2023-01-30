import './Helps.css'
import phone from '../../asset/Group\ 54.png'
import { Link } from 'react-router-dom'
import logoHelp from '../../asset/Vector-question-icon.png'
export default function Helps() {
    return (
        <div className='help-container'>
            <Link to="/account-user">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>
            <div className="help-title">
                Trợ giúp
            </div>

            <div className='help-body'>
                
                    <div className='help-item'>
                        <div className='help-body-title'>
                            <div className='help-body-title-icon'>
                                <img src={logoHelp} />
                            </div>
                            <div className='help-body-title-text '>
                                Các câu hỏi thường gặp
                            </div>
                        </div>

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>
                    <div className='help-item'>
                        

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>

                    <div className='help-item'>
                        

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>
                    <div className='help-item'>
                        

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>
                    <div className='help-item'>
                        

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>
                    <div className='help-item'>
                        

                        <div className='help-content-question'>
                            <div className='help-question-number title-bold'>
                                Câu 1:
                            </div>
                            <div className='help-question title-bold'>
                                Làm thế nào để đổi mật khẩu?
                            </div>
                            <div className='help-answer'>
                                Chọn mục “Tài khoản" -&gt; Chọn mục “Cài đặt" -&gt; Chọn mục “Đổi mật khẩu"
                            </div>

                        </div>
                        <div className='help-hr'>

                        </div>
                    </div>



            </div>


            <div className="help-number-hotline">
                <img src={phone} className="helps-phone-icon"></img>
                Hotline: 1900 1009
            </div>

            <div className="helps-footer">Hãy gọi vào số Hotline để được hỗ trợ trực tuyến!</div>
        </div>
    )
}