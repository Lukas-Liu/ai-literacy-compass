import streamlit as st

st.set_page_config(page_title="AI Literacy Compass", page_icon="🧭", layout="wide")

st.link_button("Open the Compass in a full browser tab ↗", "/app/static/index.html")
st.iframe(
    "/app/static/index.html",
    height=1100,
    alt="AI Literacy Compass: explore frameworks and find your starting point",
)
