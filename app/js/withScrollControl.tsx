import * as React from "react";
import { Component } from "react";

export default function withSCrollControl(Target) {
    return function () {
        return <Target />
    }
}