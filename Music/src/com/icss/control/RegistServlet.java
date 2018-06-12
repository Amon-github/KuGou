package com.icss.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kugou.dao.UserDaoImpl;

/**
 * @author Administrator
 * @version ����ʱ�䣺2018-6-5 ����7:04:20
 * ע����֤
 */
public class RegistServlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			doPost(request, response);
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String uPhone=request.getParameter("user");
		String uPwd=request.getParameter("pwd");
		
		if (UserDaoImpl.checkPhone(uPhone)!=0) {
			PrintWriter out = response.getWriter();
			out.print("<script>alert('�ú����Ѿ�ע�ᣡ');window.history.back(-1);</script>");
			out.flush();
			out.close();
			return;
		}
		int result=UserDaoImpl.regester(uPhone, uPwd);
		if (result==1) {
			request.setAttribute("regist_type", 1);
			request.getRequestDispatcher("register.jsp").forward(request, response);
		}else {
				System.out.println("�쳣��ע��ʧ��!");
		}

	}

}
