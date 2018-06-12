package com.icss.control;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Administrator
 * @version ����ʱ�䣺2018-6-8 ����2:57:05
 * ����ַ�����: utf-8
 */
public class CharsetFilter   implements Filter {

	
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest  res=(HttpServletRequest) request;
		HttpServletResponse resq=(HttpServletResponse) response;
		
		//���������Ӧ���ַ��������ó� utf-8����ʽ
		resq.setContentType("text/html;charset=utf-8");
		res.setCharacterEncoding("utf-8");
		resq.setCharacterEncoding("utf-8");
		
		//ֱ�ӽ��������Ӧ����
		chain.doFilter(res, resq);
		
		
	}

	@Override
	public void destroy() {
		// TODO �Զ����ɵķ������
		
	}

}