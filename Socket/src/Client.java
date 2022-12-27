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
 *
 * @author Marc Frincu
 */
public class Client {
    private Socket clientSocket;
    private PrintWriter out;
    private BufferedReader in;

    public void startConnection(String ip, int port) throws IOException {
        // Create the socket connection to the server
        // What happens if you try to connect before starting the server?
        this.clientSocket = new Socket(ip, port);
        // Set up the input/output buffers that handle the communication with the server
        this.out = new PrintWriter(this.clientSocket.getOutputStream(), true);
        this.in = new BufferedReader(new InputStreamReader(this.clientSocket.getInputStream()));
    }

    public String sendMessage(String msg) throws IOException {
        this.out.println(msg);
        String resp = in.readLine();
        return resp;
    }

    public void stopConnection() throws IOException {
        // The input/output buffers must be closed before the sockets
        this.in.close();
        this.out.close();
        this.clientSocket.close();
    }
    
    public static void main(String  args[]) throws IOException {
        Client client = new Client();
        client.startConnection("127.0.0.1", 6666);
        String response = client.sendMessage("Hello");
        System.out.println("Server says: " + response);
    }
}
