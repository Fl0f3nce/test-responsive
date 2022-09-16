<%-- !!DO_NOT_GENERATE!! --%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--
Demo table to show usage of two adjacent tables, one table with sliders.
--%>  
<div id="eltest_table_wrapper">
  <div>Eine Demo-Tabelle</div>
    <div id="eltest_protocolFront1">
      <table class="eltest_protocol_table">
        <tr>
          <th class="eltest_col_width_header">ID</th>
          <th class="eltest_col_width_header">Name</th>
          <th class="eltest_col_width_header">Bedienzeit</th>
          <th class="eltest_col_width_header">Ankunftzeit</th>
        </tr>			  	 

        <tr id="row1" onclick="alert('Element with ID=' + this.id + ' clicked.')">
          <td>1</td>
          <td>rsyslogd1</td>
          <td>2</td>
          <td>1</td>
        </tr>

        <tr id="row2" onclick="alert('Element with ID=' + this.id + ' clicked.')">
          <td>2</td>
          <td>Init</td>
          <td>4</td>
          <td>1</td>
        </tr>

        <!--  weitere Header-Rows  -->

        <tr id="row6" onclick="alert('Element with ID=' + this.id + ' clicked.')">
          <td>6</td>
          <td>rsyslogd3</td>
          <td>12</td>
          <td>2</td>
        </tr>

      </table>
    </div>
    <%@page import="java.io.*" %>
    <%!
      private void print_demo_table_value_row(int nbcols, String htmlelem, String classname, String text,  JspWriter out)
              throws IOException {
        int i, count_cols = nbcols;
        for (i = 0; i < count_cols; i++) {
          out.println("<" + htmlelem + " class=\""+ classname + "\">" + text + i + "</" + htmlelem + ">");
        } // for
      } // print_demo_table_value_row()
%>

    <div id="eltest_protocolValues1">
      <table class="eltest_protocol_table">
        <tr>
          <% int nbcols = 12;
            String text = "t = "; 
            String htmlelem = "th";
            String classname="eltest_col_width_val";
          print_demo_table_value_row(nbcols,htmlelem, classname, text, out);
          %>
        </tr>

        <tr id="row1a" onclick="alert('Element with ID=' + this.id + ' clicked.')">
           <%  text = "x"; 
           htmlelem = "td"; 
           classname = "";
          print_demo_table_value_row(nbcols,htmlelem, classname, text, out);
           %>
        </tr>                            

        <tr id="row2a" onclick="alert('Element with ID=' + this.id + ' clicked.')">
          <%  text = "y";
          print_demo_table_value_row(nbcols,htmlelem, classname, text, out);
           %>
        </tr>                            

        <tr id="row6a" onclick="alert('Element with ID=' + this.id + ' clicked.')">
          <%  text = "z";
          print_demo_table_value_row(nbcols,htmlelem, classname, text, out);
           %>
        </tr>                            

      </table>
    </div>
  </div> <!-- table_wrapper -->

