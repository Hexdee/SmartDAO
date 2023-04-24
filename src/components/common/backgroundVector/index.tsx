interface bgProps {
    left: string;
    right: string;
}

const defaultProps: bgProps = {
    left: '',
    right: '',
}

export const BackgroundIcon = ({right, left}: bgProps) => (
<div className={`first-background absolute ${right} ${left}`} data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-in-sine">
    <div className="stars justify-between" style={{ height: "800px; width: 100%" }}>
    <div
    className="star star1"
    style={{
    height: "42px",
    width: "42px",
    left: "4.1%",
    top: "14.625%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.650529" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#C1B0F1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star2"
    style={{
    height: "29px",
    width: "29px",
    left: "4.66%",
    top: "29.75%",
    opacity: "0.6",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.995575" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#19D992"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star3"
    style={{
    height: "42px",
    width: "42px",
    left: "0.21%",
    top: "58.25%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.215568" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#E9FFDA"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star4"
    style={{
    height: "27px",
    width: "27px",
    left: "39.79%",
    top: "2.4%",
    opacity: "0.6",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.923324" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#8060D9"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star5"
    style={{
    height: "67px",
    width: "67px",
    left: "45%",
    top: "7%",
    opacity: "0.6",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.703716" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#19D992"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star6"
    style={{
    height: "42px",
    width: "42px",
    left: "93.29%",
    top: "9.25%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.641174" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#C1B0F1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star7"
    style={{
    height: "42px",
    width: "42px",
    left: "43.84%",
    top: "60%",
    opacity: "0.6",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.999214" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#8060D9"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star8"
    style={{
    height: "21px",
    width: "21px",
    left: "93.01%",
    top: "25.25%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.000570525" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#19D992"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star9"
    style={{
    height: "21px",
    width: "21px",
    left: "94.73%",
    top: "28.5%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.969116" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#19D992"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star10"
    style={{
    height: "21px",
    width: "21px",
    left: "96.3%",
    top: "47.375%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.000570525" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#C1B0F1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star11"
    style={{
    height: "21px",
    width: "21px",
    left: "84.79%",
    top: "60.875%",
    opacity: "0.2",
    transform: "translateY(0px) rotate(0deg) translateZ(0px)",
    }}
    >
    <div style={{ opacity: "0.97932" }}>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#C1B0F1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    <div
    className="star star12"
    style={{
    height: "21px",
    width: "21px",
    left: "95.75%",
    top: "90.875%",
    opacity: "0",
    transform: "translateY(210px) rotate(225deg) translateZ(0px)",
    }}
    >
    <div>
    <svg
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="#C1B0F1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4908 12.7161C33.1106 8.79852 34.0281 4.50519 34.0827 -1.43851e-06L34.0864 4.33345e-05L34.0901 -1.43818e-06C34.1443 4.50517 35.0616 8.79853 36.681 12.7162C40.0553 20.8789 46.4783 27.4107 54.496 30.8294C58.3431 32.4698 62.5573 33.3934 66.978 33.4366C62.5572 33.4798 58.343 34.4034 54.496 36.0438C46.4785 39.4624 40.0558 45.9938 36.6814 54.1561C35.0865 58.0141 34.1726 62.2364 34.0932 66.6665L34.0864 66.6664L34.0796 66.6665M34.0796 66.6663C34.0001 62.2362 33.0861 58.014 31.4911 54.1561C28.1162 45.9929 21.6922 39.461 13.6733 36.0429C9.7574 34.3737 5.46115 33.4471 0.95394 33.4357C5.46114 33.4243 9.75737 32.4977 13.6733 30.8285C21.6919 27.4106 28.1157 20.879 31.4908 12.7161M19.3354 33.4357C25.5169 29.9411 30.6326 24.7477 34.0857 18.4873C37.5383 24.7479 42.6537 29.9416 48.835 33.4366C42.654 36.9315 37.5388 42.1248 34.0862 48.385C30.6331 42.1243 25.5171 36.9305 19.3354 33.4357Z"
        ></path>
    </svg>
    </div>
    </div>
    </div>
</div>
);

BackgroundIcon.defaultProps = defaultProps;
