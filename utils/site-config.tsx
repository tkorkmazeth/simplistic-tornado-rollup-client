export const config = {
  title: "CashProof Enhanced",
  description:
    "Effortless, Privacy-Preserving Proof of Funds with Blockchain Technology",
  isLocal: process.env.NEXT_PUBLIC_ENV === "development",
  about: [
    {
      title: "What is CashProof Enhanced?",
      description:
        "CashProof Enhanced is an advanced tool that allows you to prove your balance without exposing your addresses, balance, or other sensitive information to the requester, using state-of-the-art Zero-Knowledge Proof technology.",
    },
    {
      title: "How does it work?",
      description:
        "You submit a verification request, which is processed using Zero-Knowledge Proofs. The verifier validates the proof without ever seeing your actual balance or addresses, ensuring complete privacy.",
    },
    {
      title: "Why should I use CashProof Enhanced?",
      description:
        "CashProof Enhanced ensures your financial privacy while providing robust proof of funds. It's ideal for high-value transactions where privacy and security are paramount.",
    },
    {
      title: "Disclaimer",
      description:
        "CashProof Enhanced is currently a proof of concept and is provided as-is without any guarantees. Use at your own risk.",
    },
  ],
  steps: [
    {
      title: "Create Request",
      description:
        "Initiate a balance verification request. A unique verification link is generated for you to share with the other party.",
    },
    {
      title: "Share Link",
      description:
        "The recipient accesses the verification link, connects their known address, and generates a Zero-Knowledge Proof that they meet the balance requirements, without revealing their actual balance.",
    },
    {
      title: "Verify Proof",
      description:
        "The requester reviews the completed attestation and verification on the underlying smart contract, ensuring the proof is valid while keeping the recipient's balance private.",
    },
  ],
};
