import React from "react";
import { render, waitForElement } from "@testing-library/react";
import ArtistList from "../commons/ArtistList";
import { Provider } from "react-redux";
import store from "../store";

const data: any[] = [
  {
    name: "Guns n Roses",
    image: [
      { "#text": "" },
      {
        "#text":
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      },
      { "#text": "" }
    ],
    listeners: "12000"
  }
];

describe("Components tests", () => {
  it("Number of listeners is rendered correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ArtistList data={data} />
      </Provider>
    );
    const listenersLabel: any = await waitForElement(() =>
      getByTestId("listeners")
    );
    expect(listenersLabel.innerHTML).toBe("12000 ouvintes");
  });

  it("Artist names is rendered correctly", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ArtistList data={data} />
      </Provider>
    );
    const artistNames: any = await waitForElement(() =>
      getByTestId("artistNames")
    );
    expect(artistNames.innerHTML).toBe("Guns n Roses");
  });
});
