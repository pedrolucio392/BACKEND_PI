export const initPage = async (req, res) => {
  try {
    res.status(200).json({ msg: "Bem vindo a nossa API" });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
};
