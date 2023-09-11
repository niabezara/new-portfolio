import { useState, useEffect } from "react";
import React from "react";
import { Container } from "../styles/Styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { Technologies } from "../styles/Styles";
import { formatDate } from "../util/UseUtil";
import { githubrepos } from "../types/types";

function Archive() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/niabezara/repos"
      );
      const repositories = await response.json();

      setRepos(repositories);
    };

    fetchRepositories();
  }, []);

  return (
    <StyledArchive>
      <div>
        <h2>Archive</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th>Name</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repos.length === 0 ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            <>
              {repos
                .sort(
                  (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )
                .map((repo, index) => (
                  <tr key={index}>
                    <td>{formatDate(repo.created_at)}</td>
                    <td>{repo.name}</td>
                    <td>
                      <Technologies>
                        {repo.topics?.map(
                          (
                            language:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | null
                              | undefined,
                            index: React.Key | null | undefined
                          ) => (
                            <li key={index}>{language}</li>
                          )
                        )}
                      </Technologies>
                    </td>
                    <td>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faCodeBranch} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faExternalLink} />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
            </>
          )}
        </tbody>
      </table>
    </StyledArchive>
  );
}

const StyledArchive = styled(Container)`
  max-width: 1080px;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export default Archive;
