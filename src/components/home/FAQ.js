import React, { useState } from "react";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    IconButton
} from "@mui/material";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRounded from "@mui/icons-material/ExpandLessRounded";
import { dark } from "../../config/theme/themePrimitives"; // Thêm import dark

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const questions = [
        "Công chứng là gì?",
        "Công chứng trực tuyến hợp pháp và có giá trị tại đâu?",
        "Có thể công chứng chữ ký của hai hoặc nhiều người trong một cuộc họp không?",
        "Công chứng trực tuyến có giá trị và hiệu lực thi hành tại đâu?",
        "Tôi là một công chứng viên. Làm cách nào để đăng ký làm việc trên Công chứng?",
        "Bằng chứng đảm bảo tính bảo mật và riêng tư của thông tin cá nhân trên văn bản công chứng như thế nào?",
    ];

    const answers = [
        "Công chứng là quá trình mà một công chứng viên, người có thẩm quyền do nhà nước cấp phép, xác nhận và chứng thực tính xác thực của các văn bản, giấy tờ hoặc chữ ký trên các tài liệu. Công chứng đảm bảo rằng tài liệu đã được ký kết đúng theo quy định pháp luật và có hiệu lực pháp lý.",
        "Công chứng trực tuyến hợp pháp và có giá trị tại các quốc gia hoặc khu vực mà luật pháp cho phép việc công chứng từ xa thông qua video trực tuyến. Ví dụ, tại Mỹ, một số bang đã công nhận và cho phép công chứng trực tuyến. Tại Việt Nam, hiện nay, công chứng vẫn chủ yếu thực hiện trực tiếp nhưng công chứng trực tuyến đang dần được xem xét và áp dụng theo các quy định pháp luật.",
        "Có, hai hoặc nhiều người ký có thể cùng tham gia một cuộc họp trực tuyến để công chứng chữ ký của họ. Công chứng viên sẽ xác nhận danh tính và chứng thực chữ ký của tất cả các bên tham gia trong cùng một buổi gặp, đảm bảo tính hợp pháp và hiệu lực của tài liệu.",
        "Công chứng trực tuyến có giá trị và hiệu lực thi hành tại các khu vực mà luật pháp cho phép việc công chứng từ xa, thông qua nền tảng trực tuyến. Điều này phụ thuộc vào quy định của từng quốc gia, và thông thường sẽ cần tuân thủ những yêu cầu về xác minh danh tính, bảo mật thông tin và cách thức thực hiện công chứng trực tuyến.",
        "Nếu bạn là công chứng viên muốn tham gia vào nền tảng công chứng trực tuyến, bạn có thể đăng ký bằng cách tạo tài khoản và hoàn thành quy trình đăng ký với các giấy tờ chứng nhận công chứng viên hợp lệ. Bạn sẽ cần cung cấp bằng chứng về giấy phép hành nghề, các thông tin cá nhân, và đôi khi cần vượt qua các bài kiểm tra chuyên môn trước khi được chấp nhận làm việc trên hệ thống.",
        "Chúng tôi cam kết bảo mật và bảo vệ thông tin cá nhân của khách hàng bằng các phương pháp mã hóa dữ liệu tiên tiến và tuân thủ các tiêu chuẩn bảo mật quốc tế. Các tài liệu công chứng trực tuyến được lưu trữ an toàn và chỉ có những bên liên quan, như người ký và công chứng viên, mới có quyền truy cập vào thông tin. Hệ thống cũng sử dụng các phương pháp xác minh danh tính mạnh mẽ để đảm bảo an toàn cho quá trình công chứng."
    ];

    return (
        <Container sx={{ pb: 10, width: "100%" }}>
            <Typography variant="h3" fontWeight="bold" textAlign="center" color={dark[500]}>
                Những câu hỏi thường gặp.
            </Typography>
            <List>
                {questions.map((question, index) => (
                    <React.Fragment key={index}>
                        <ListItem button onClick={() => toggleExpand(index)} sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                            <ListItemText primary={question} primaryTypographyProps={{ fontSize: 18, fontWeight: 600, color: dark[500] }} sx={{ cursor: "default" }} />
                            <IconButton>
                                {expandedIndex === index ? <ExpandLessRounded sx={{ color: dark[500] }} /> : <ExpandMoreRounded sx={{ color: dark[500] }} />}
                            </IconButton>
                        </ListItem>
                        <Collapse in={expandedIndex === index}>
                            <Typography variant="body1" sx={{ mx: 2, my: 2, fontSize: 18, color: dark[500], cursor: "default" }}>
                                {answers[index]}
                            </Typography>
                        </Collapse>
                        {index < questions.length - 1 && <Divider sx={{ my: 2 }} />}
                    </React.Fragment>
                ))}
            </List>
        </Container>
    );
};

export default FAQSection;
