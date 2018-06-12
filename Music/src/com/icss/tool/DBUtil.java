package com.icss.tool;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBUtil {
	/**
	 * ����һ����̬����
	 */
    static	ComboPooledDataSource  cpds =null;
    /**
     * �ھ�̬����,��ʼ��һ�����Ӷ���
     */
	static{
		 cpds=new ComboPooledDataSource("mysql");
	}
	
	/***
	 * 
	 * @return
	 * 
	 */
   public static Connection getConnection(){
	     try {
			Connection conn=  cpds.getConnection();
			System.out.println("���ݿ����ӳɹ���");
			return conn;
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
	   return null;
   }
   
   /**
    * �ر�����
    * @param rs
    * @param pstm
    * @param conn
    */
   public static void closeResource(ResultSet rs,PreparedStatement pstm,Connection conn){
	   try{
		   if(rs!=null){rs.close();}
		   if(pstm!=null){pstm.close();}
		   if(conn!=null){conn.close();}
	   }catch(Exception  e){
		   e.printStackTrace();
	   }
   }
   

   
   
  
}
