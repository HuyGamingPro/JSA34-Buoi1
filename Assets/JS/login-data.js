document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Đọc tệp JSON chứa thông tin đăng nhập
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const users = data.users;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Đăng nhập thành công
        document.getElementById("message").innerHTML =
          "Login successful. Redirecting...";

        // Chuyển trang sau 2 giây (có thể điều chỉnh thời gian chuyển trang)
        setTimeout(function () {
          window.location.href = "user.html"; // Đổi thành trang bạn muốn chuyển đến
        }, 2000); // 2000 milliseconds = 2 giây
      } else {
        // Đăng nhập thất bại
        document.getElementById("message").innerHTML =
          "Login failed. Please check your credentials.";
      }
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
});
