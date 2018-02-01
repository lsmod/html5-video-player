import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "../src/App";
import Player from "../src/components/Player";

const wrapper = shallow(<App />);

describe("(Component) App", () => {
  it("type div", () => {
    expect(wrapper.type()).to.eql("div");
  });
});

const player = shallow(<Player width="300" height="100" />);

describe("(Component) Player", () => {
  it("type div", () => {
    expect(player.type()).to.eql("div");
  });
  it("classname simple_video_player", () => {
    expect(player.hasClass("simple_video_player")).to.equal(true);
  });
  it("player width", () => {
    expect(player.find("video").prop("width")).to.equal("300");
  });
  it("player height", () => {
    expect(player.find("video").prop("height")).to.equal("100");
  });
  it("player on pause (button text)", () => {
    expect(player.find(".simple_video_player-button").text()).to.equal("play");
  });
  it("state: paused", () => {
    expect(player.state().paused).to.equal(true);
  });
  it("state: ended", () => {
    expect(player.state().ended).to.equal(false);
  });
  it("state: duration", () => {
    expect(player.state().duration).to.equal(0);
  });
  it("state: currentTime", () => {
    expect(player.state().currentTime).to.equal(0);
  });
});
