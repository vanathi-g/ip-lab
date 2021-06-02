import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

public class Compose extends HttpServlet{
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws ServletException, IOException{
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();

		out.println("<html><head><meta charset='UTF-8'><title>Compose</title><link rel='stylesheet' href='style.css'></head><body>");
		out.println("<div class='message-box'>");
		out.println("<h1 class='message-header'>New Message</h1>");
		out.println("<form method='POST' action='/email/send'>");
		out.println("<input type='email' id='receiver' name='receiver' placeholder='To' pattern='.*@.*\\..*' title='Enter a valid email address!' />");
		out.println("<input type='text' id='subject' name='subject' placeholder='Subject' />");
		out.println("<textarea rows='6' name='body'></textarea>");
		out.println("<input class='btn' type='submit' value='Send' />");
		out.println("</form></div></body></html>");

		out.close();
	}
}