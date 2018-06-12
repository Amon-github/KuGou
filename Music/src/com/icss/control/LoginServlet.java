package com.icss.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.kugou.dao.UserDaoImpl;
import com.kugou.entify.User;

/**
 * @author Administrator
 * @version ����ʱ�䣺2018-6-5 ����8:13:10
 * ��¼��֤
 */
public class LoginServlet extends HttpServlet {



	
	@Override	
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {


				
	String uPhone=request.getParameter("userName");
	String pwd=request.getParameter("password");

	
	
	User u=UserDaoImpl.logon(uPhone, pwd);
	String mess="";
	if (u!=null) {
		System.out.println(u);
		System.out.println("��¼�ɹ���");
		
		if (u.getNick()==null) {
			mess="K"+u.getId();
		}else {
			mess=u.getNick();
		}
		//�½�session��
		HttpSession session= request.getSession();
		session.setAttribute("uPhone", u.getPhone());
		session.setAttribute("user_name", mess);
		session.setMaxInactiveInterval(20*60);

		response.sendRedirect("ListAllServlet"); 
	}else {
		PrintWriter out = response.getWriter();
		out.print("<script>alert('�û��������������');window.history.back(-1);</script>");
		out.flush();
		out.close();
		
		
	}
	}


}
