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
 * @version ����ʱ�䣺2018-6-9 ����4:15:04
 * ��˵��
 */
public class UpdatePwdServlet extends HttpServlet {


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session= request.getSession();

		String uPhone="";
		Object OPhone=session.getAttribute("uPhone");
		if (OPhone!=null) {
			uPhone=(String) OPhone;
		} else {
			System.out.println("session��û���û����ݣ�");
			return;
		}
		String fpwd=request.getParameter("fpwd");
		String pwd=request.getParameter("pwd");
		User u=UserDaoImpl.logon(uPhone, fpwd);
		String mess="";
		
		if (u!=null) {
			System.out.println("�޸����룬�û���֤�ɹ���");
			int result=UserDaoImpl.updatePwd(uPhone, pwd);
			if (result==1) {
				System.out.println("�޸�����ɹ���");
				request.setAttribute("login_type", 1);
				session.invalidate();
	    		request.getRequestDispatcher("ListAllServlet").forward(request, response);
			}else {
				System.out.println("�޸�ʧ�ܣ�");
			}
		}else {
			PrintWriter out = response.getWriter();
			out.print("<script>alert('�û��������������');window.history.back(-1);</script>");
			out.flush();
			out.close();
		}

	}

}
