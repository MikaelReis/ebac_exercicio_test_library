import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CommentForm from "../components/PostComments"; 

describe("CommentForm", () => {
    test("deve permitir a inserção de dois comentários", () => {
    render(<CommentForm />);

    const input = screen.getByTestId("comment-input");
    const button = screen.getByTestId("submit-button");

    // Inserir primeiro comentário
    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    // Inserir segundo comentário
    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    // Verificar se os comentários foram adicionados à tela
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
