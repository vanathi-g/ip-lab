import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

import java.sql.*;

public class Send extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();

		String receiver = req.getParameter("receiver");
		String subject = req.getParameter("subject");
		String body = req.getParameter("body");

		out.println("<html><head><meta charset='UTF-8'><title>Sent Emails</title><link rel='stylesheet' href='style.css'></head><body>");

		try{
			final String user = "root";
			final String pass = "vanathi21";
			final String url = "jdbc:mysql://localhost:3306/email";

			Connection conn = DriverManager.getConnection(url, user, pass);
			Statement stmt = conn.createStatement();

			String query = "INSERT INTO sent VALUES('"+receiver+"', '"+subject+"', '"+body+"')";
			stmt.executeUpdate(query);

			query = "SELECT * FROM sent";
			ResultSet rs = stmt.executeQuery(query);

			out.println("<div class='sent-content'><h3>Your sent emails:</h3><br><table cellspacing='0'><tr><th>To</th><th>Subject</th><th>Body</th></tr>");

			while(rs.next()){
				receiver = rs.getString("receiver");
				subject = rs.getString("subject");
				body = rs.getString("body");

				out.println("<tr><td>"+receiver+"</td><td>"+subject+"</td><td>"+body+"</td></tr>");
			}

			out.println("</table></div>");

			stmt.close();
			conn.close();

		}catch(Exception e){
			out.println("Error Occured: "+e);
			e.printStackTrace();
		}

		out.println("</body></html>");
		out.close();
	}
}