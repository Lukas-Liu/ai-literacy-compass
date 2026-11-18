# AI Literacy Compass on Streamlit

This package contains the updated 92-entry Compass, larger typography, sphere label fixes, and four source PDFs. Streamlit serves the trusted website files from `static/` and displays the site with `st.iframe`.

## Deploy

1. Extract this ZIP. Upload its contents to the root of a GitHub repository, keeping the `.streamlit/config.toml` file and the `static/` folder. On macOS, use Command-Shift-Period in Finder to reveal `.streamlit` if it is hidden.
2. Sign in at https://share.streamlit.io and connect GitHub.
3. Choose Create app, select your repository and branch, and set the main file path to `streamlit_app.py`.
4. Deploy. Under Settings > Sharing, select “This app is public and searchable” if the app is private.
5. Share the resulting `.streamlit.app` URL with students.

The page includes an “Open the Compass in a full browser tab” button to use the prototype without the surrounding Streamlit page. The relative static URLs retain CSS, JavaScript module imports, and source-PDF links.

## Run locally (optional)

From this extracted folder, run:

    python3 -m pip install -r requirements.txt
    python3 -m streamlit run streamlit_app.py

## Validation

The Python entrypoint was syntax-checked, the static files were compared byte-for-byte with the updated prototype, and the ZIP was checked for corruption. This Streamlit package has not been deployed or tested in a running Streamlit browser session.

Official documentation:
- https://docs.streamlit.io/develop/api-reference/text/st.iframe
- https://docs.streamlit.io/develop/concepts/configuration/serving-static-files
- https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy
