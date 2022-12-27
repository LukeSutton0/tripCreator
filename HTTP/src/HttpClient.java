/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

/**
 * This class is identical to the one in Client.java. The difference is that it is used to
 * connect to a web server on port 80. Why this port?
 * @author Marc Frincu
 */
public class HttpClient {
     private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    public void startConnection(String ip, int port) throws IOException {
        this.clientSocket = new Socket(ip, port);
        this.out = new PrintWriter(this.clientSocket.getOutputStream(), true);
        this.in = new BufferedReader(new InputStreamReader(this.clientSocket.getInputStream()));
    }

    public String sendMessage(String msg) throws IOException {
        this.out.println(msg);
        String response = "";
        String line = in.readLine();
        // Read the entire response line by line
        while( line != null )
            {
                response += line + "\r\n";
                line = in.readLine();
            }
        return response;
    }

    public void stopConnection() throws IOException {
        // The input/output buffers must be closed before the sockets
        this.in.close();
        this.out.close();
        this.clientSocket.close();
    }
    
    public static void main(String  args[]) throws IOException {
        HttpClient client = new HttpClient();
        // Establish a socket connection to remote web server. Why is port 80 being used?
        client.startConnection("www.7timer.info", 80);
        String request = "GET /bin/astro.php?lon=%20-1.94&lat=52.09&lang=en&ac=0&unit=metric&output=json HTTP/1.0";
        request += "\r\n"; // What does this combination of symbols mean? 
        request += "\r\n"; // Why do we need two of them?
        String response = client.sendMessage(request);
        System.out.println("Server HTTP Response: " + response);
    }
}
