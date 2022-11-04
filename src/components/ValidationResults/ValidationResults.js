import './ValidationResults.css'

export default function ValidationResults() {
    return (
        <div className="container">
            <div className='result-title'>Kết quả xác thực</div>
            <div className='result-body'>
                <div className='result-body-wrap'>
                    <div className='type-valid'>
                        <div className='type-valid-text'>Loại giấy tờ</div>
                        <div className='type-valid-result blue'>Hợp lệ</div>
                        <div className='type-valid-hr'></div>
                    </div>
                    <div className='front-backside-ID'>
                        <div className='front-backside-ID-text'>Mặt trước, mặt sau giấy tờ</div>
                        <div className='front-backside-ID-result blue'>Cùng loại</div>
                        <div className='front-backside-ID-hr'></div>
                    </div>
                    <div className='ID-blur'>
                        <div className='ID-blur-text'>Giấy tờ mờ nhòe, mất góc</div>
                        <div className='ID-blur-result blue'>Không</div>
                        <div className='ID-blur-hr'></div>

                    </div>
                    <div className='ID-number-quality'>
                        <div className='ID-number-quality-text'>Chất lượng số ID</div>
                        <div className='ID-number-quality-result blue'>Tốt</div>
                        <div className='ID-number-quality-hr'></div>
                    </div>
                    <div className='ID-date-quality'>
                        <div className='ID-date-quality-text'>Chất lượng ngày cấp</div>
                        <div className='ID-date-quality-result blue'>Tốt</div>
                        <div className='ID-date-quality-hr'></div>
                    </div>
                    <div className='ID-expiry-quality'>
                        <div className='ID-expiry-quality-text'>Hạn giấy tờ</div>
                        <div className='ID-expiry-quality-result blue'>Còn hạn</div>
                        <div className='ID-expiry-quality-hr'></div>
                    </div>
                    <div className='ID-accuracy'>
                        <div className='ID-accuracy-text'>Xác thực giấy tờ</div>
                        <div className='ID-accuracy-result blue'>Chụp trực tiếp</div>
                        <div className='ID-accuracy-hr'></div>
                    </div>
                    <div className='warning-information'>
                        <div className='warning-information-text'>Cảnh báo trường thông tin</div>
                        <div className='warning-information-result blue'>Hợp lệ</div>
                        <div className='warning-information-hr'></div>
                    </div>
                    <div className='open-eyes'>
                        <div className='open-eyes-text'>Mở mắt</div>
                        <div className='open-eyes-result blue'>Có</div>
                        <div className='open-eyes-hr'></div>
                    </div>
                    <div className='face-id-accuracy'>
                        <div className='face-id-accuracy-text'>Xác thực chân dung</div>
                        <div className='face-id-accuracy-result blue'>Hợp lệ</div>
                        <div className='face-id-accuracy-hr'></div>
                    </div>
                    <div className='hide-eyes'>
                        <div className='hide-eyes-text'>Mắt bị che</div>
                        <div className='hide-eyes-result blue'>Không</div>
                        <div className='hide-eyes-hr'></div>
                    </div>
                </div>

            </div>
            <div className='complete-result'>
                Xong
            </div>
        </div>
    )
}