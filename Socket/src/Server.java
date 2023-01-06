package src;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

/**
 *
 * @author Marc Frincu
 */
public class Server {
    private ServerSocket serverSocket;
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    public void start(int port) throws IOException {
  
        // Create the server socket
        this.serverSocket = new ServerSocket(port);
        // Accept a client connection
        this.clientSocket = this.serverSocket.accept();
        // Prepare to send data to the client by using the client socket's output stream
        this.out = new PrintWriter(this.clientSocket.getOutputStream(), true);
        // Prepare to receive data from the client by using the client socket's input stream
        this.in = new BufferedReader(new InputStreamReader(this.clientSocket.getInputStream()));
        
        // Read a text mesage from the client
        String input = in.readLine();
        System.out.println("Client says: " + input);
        // Reply to the client
        this.out.println("Hi There!");
        // Close the socket connection and the associated buffers
        this.stop();
    }

    public void stop() throws IOException {
        // The input/output buffers must be closed before the sockets
        this.in.close();
        this.out.close();
        this.clientSocket.close();
        this.serverSocket.close();
    }
    
    public static void main(String[] args) throws IOException {
        Server server = new Server();
        server.start(6666);
    }
}
